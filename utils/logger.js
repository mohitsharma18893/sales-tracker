import { createLogger, format, transports } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import fs from 'fs';
import path from 'path';

['logs','logs/info', 'logs/error'].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

const logFormat = format.combine(
  format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  format.printf(info => `[${info.timestamp}] ${info.level.toUpperCase()}: ${info.message}`)
);

// 🟢 Daily INFO logs into logs/info/
const infoTransport = new DailyRotateFile({
  filename: 'logs/info/info-%DATE%.log',
  datePattern: 'DD-MM-YYYY',
  zippedArchive: false,
  maxFiles: '30d',
  level: 'info',
  auditFile: 'logs/info-audit.json'  // central audit for info logs
});

// 🔴 Daily ERROR logs into logs/error/
const errorTransport = new DailyRotateFile({
  filename: 'logs/error/error-%DATE%.log',
  datePattern: 'DD-MM-YYYY',
  zippedArchive: false,
  maxFiles: '30d',
  level: 'error',
  auditFile: 'logs/error-audit.json'
});

// 📦 Logger instance
const logger = createLogger({
  level: 'info',
  format: logFormat,
  transports: [
    new transports.Console(),  // Console output (dev mode)
    infoTransport,
    errorTransport
  ]
});

export default logger;

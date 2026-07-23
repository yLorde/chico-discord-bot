FROM node:20-alpine

WORKDIR /src

COPY app/package*.json ./

RUN npm install --omit=dev --verbose

COPY app ./

RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001

USER nodejs

EXPOSE 5000

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD node -e "console.log('ok')" || exit 1

CMD ["node", "src/index.js"]
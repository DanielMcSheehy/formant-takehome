FROM denoland/deno:alpine

EXPOSE 8000

WORKDIR /Webserver

USER deno

COPY . .

CMD ["deno", "run", "--allow-net", "server.ts"]
FROM golang:1.20-alpine as builder
WORKDIR /app
COPY . .
RUN GOOS=linux go build -o fullcycle -ldflags='-s -w' .

FROM scratch
WORKDIR /app
COPY --from=builder /app/fullcycle .
ENTRYPOINT [ "./fullcycle" ]
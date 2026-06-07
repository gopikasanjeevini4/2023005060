# Notification Management System

## Stage 1 - API Design

GET /notifications

GET /notifications/priority

PATCH /notifications/:id/read

## Stage 2 - Database Design

notifications

id
type
message
priority
isRead
createdAt

## Stage 3 - Query Optimization

Indexes on:

studentId
createdAt
isRead

## Stage 4 - Scaling

Redis Cache

Pagination

WebSockets

## Stage 5 - Reliable Delivery

RabbitMQ

Retry Mechanism

Dead Letter Queue

## Stage 6 - Priority Notifications

Placement = 3

Result = 2

Event = 1

Priority Score = Weight + Recency
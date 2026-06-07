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

## Stage 7 - Frontend Application

Built with React + Vite, styled with Material UI.

### Pages

| Route | Description |
|-------|-------------|
| `/` | Health check — confirms backend is running |
| `/notifications` | All notifications with new vs. viewed distinction |
| `/notifications/priority` | Top-N priority inbox with type filter |

### Features

- New vs. Viewed: Unread notifications are visually highlighted; clicking marks them as read
- Priority page: Displays top-N notifications sorted by Stage 6 scoring, with type badge colour-coding
- Filter by type: Users can filter the priority inbox by notification type (Placement, Result, Event)
- Responsive: Works on both desktop and mobile viewports

### Screenshots

#### Backend — Health Check (`localhost:3000`)

![Backend Health Check](https://raw.githubusercontent.com/gopikasanjeevini4/2023005060/main/screenshot/Screenshot%202026-06-07%20132323.png)

#### Backend — All Notifications (`localhost:3000/notifications`)

![All Notifications API](https://raw.githubusercontent.com/gopikasanjeevini4/2023005060/main/screenshot/Screenshot%202026-06-07%20132328.png)

#### Backend — Priority Notifications (`localhost:3000/notifications/priority`)

![Priority Notifications API](https://raw.githubusercontent.com/gopikasanjeevini4/2023005060/main/screenshot/Screenshot%202026-06-07%20132333.png)

#### Frontend — Campus Notification System UI (`localhost:5173`)

![Frontend UI](https://raw.githubusercontent.com/gopikasanjeevini4/2023005060/main/screenshot/Screenshot%202026-06-07%20132232.png)

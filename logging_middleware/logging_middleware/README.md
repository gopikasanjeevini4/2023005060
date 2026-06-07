# Logging Middleware

Reusable middleware for sending logs to the Affordmed Evaluation Logging API.

## Usage

```javascript
Log(
  "backend",
  "info",
  "service",
  "Notification fetched"
);

---

### One Important Change

Use valid package names from the PDF.

For backend use:

```text
cache
controller
cron_job
db
domain
handler
repository
route
service
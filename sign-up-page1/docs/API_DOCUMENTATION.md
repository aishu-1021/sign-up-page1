# API Documentation

## Base URL
`http://localhost:5000/api`

---

## Authentication

### POST `/auth/register`
Register a new user.

**Request Body:**
- `name` (string, required)
- `email` (string, required, valid email)
- `password` (string, required, min 6 chars)

**Response:**
- 201 Created
- `{ message: "User registered successfully" }`

**Errors:**
- 400 Bad Request (invalid input)
- 409 Conflict (email exists)

---

### POST `/auth/login`
Login user.

**Request Body:**
- `email` (string, required)
- `password` (string, required)

**Response:**
- 200 OK
- `{ token: string, user: { id, name, email, role } }`

**Errors:**
- 400 Bad Request
- 401 Unauthorized (invalid credentials)

---

### GET `/auth/me`
Get current user profile.

**Headers:**
- `Authorization: Bearer <token>`

**Response:**
- 200 OK
- `{ id, name, email, role, createdAt }`

**Errors:**
- 401 Unauthorized

---

## Rounds

All endpoints require `Authorization: Bearer <token>` header.

### GET `/rounds/:round`
Get questions and cutoff for a given round.

- `round` path param: `aptitude`, `technical`, `interview`, `hr`

**Response:**
- 200 OK
- `{ questions: Array, cutoff: number }`

**Errors:**
- 400 Bad Request (invalid round)
- 401 Unauthorized

---

### POST `/rounds/:round/submit`
Submit answers for a round.

- `round` path param: `aptitude`, `technical`, `interview`, `hr`
- Request Body:
  - `answers`: array of answers or object (for aptitude/technical: array ordered by question index; for interview/hr: array of strings)

**Response:**
- 200 OK
- `{ score: number, passed: boolean, feedback: string }`

**Side Effects:**
- Saves result in DB
- Sends email with pass/fail and feedback

**Errors:**
- 400 Bad Request (missing or invalid answers)
- 401 Unauthorized

---

## Dashboard

### GET `/dashboard`
Get user progress and past results.

**Headers:**
- `Authorization: Bearer <token>`

**Response:**
- 200 OK
- JSON object with keys: `aptitude`, `technical`, `interview`, `hr`, each having:
  - `score` (number)
  - `passed` (boolean)
  - `feedback` (string)
  - `date` (string, ISO date)

**Errors:**
- 401 Unauthorized

---

## Error Responses

All errors return JSON:


import http from 'k6/http';
import { check, sleep } from "k6";
import { Counter } from "k6/metrics";

export const requests = new Counter("http_reqs");

export let options = {
  stages: [
    { duration: '2m', target: 100 }, // below normal load
    { duration: '5m', target: 100 },
    { duration: '2m', target: 200 }, // normal load
    { duration: '5m', target: 200 },
    { duration: '2m', target: 300 }, // around the breaking point
    { duration: '5m', target: 300 },
    { duration: '2m', target: 400 }, // beyond the breaking point
    { duration: '5m', target: 400 },
    { duration: '10m', target: 0 }, // scale down. Recovery stage.
  ],
};

export default function() {
  const id = 1;

  const res = http.get(`http://localhost:3000/api/calendar/`);
  const checkRes = check(res, {
    "Error Rate": (r) => r.status !== 200,
    "Transaction time under 2000ms": (r) => r.timings.duration < 2000
  });

  sleep(1);
}
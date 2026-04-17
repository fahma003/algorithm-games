import { Router } from 'express';

const router = Router();

// TODO (Team 5): Implement 16-Queens game routes.
// See README.md in this folder for the full spec and API contract.
router.all('*', (_req, res) => {
  res.status(501).json({ error: 'Not implemented yet — assigned to Team 5 (16-Queens)' });
});

export default router;

import { Router } from 'express';
import {
  getAllDatabases,
  createTableHelper,
  createDatabaseHelper,
  getDatabaseByNameHelper,
} from '../controllers/database.js';
import {
  validateAuthentication,
  validateDeveloperRole,
} from '../middleware/auth.js';

const router = Router();

router.get('/get-all-databases', getAllDatabases);
router.post('/create-new-database', createDatabaseHelper);
router.get('/get-database-by-name', getDatabaseByNameHelper);
router.post('/create-new-table', createTableHelper);

export default router;

// Errors
import { myEmitterErrors } from '../event/errorEvents.js';
// Events
import { NotFoundEvent, ServerErrorEvent } from '../event/utils/errorUtils.js';
// PostgreSQL
import pool from '../utils/postgresqlClient.js';
// Responses
import {
  EVENT_MESSAGES,
  sendDataResponse,
  sendMessageResponse,
} from '../utils/responses.js';

export const getAllDatabases = async (req, res) => {
  console.log('getAllDatabases');

  try {
    const result = await pool.query(`
      SELECT datname
      FROM pg_database
      WHERE datistemplate = false;
    `);

    return sendDataResponse(res, 200, { databases: result });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Get all databases`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const createDatabaseHelper = async (req, res) => {
  console.log('createDatabaseHelper');

  // Extract the database name from the request body
  const { databaseName } = req.body;

  if (!databaseName) {
    return res.status(400).json({ error: 'Database name is required' });
  }

  try {
    // SQL query to create the database
    const query = `CREATE DATABASE ${databaseName};`;

    // Execute the query to create the database
    const result = await pool.query(query);

    return sendDataResponse(res, 200, { database: result });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Create table failed`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const getDatabaseByNameHelper = async (req, res) => {
  const { databaseName } = req.query; // Get the database name from query parameters
  // http://localhost:3000/database?databaseName=your_database_name
  if (!databaseName) {
    return res.status(400).json({ error: 'Database name is required' });
  }

  try {
    // Query to fetch the database by name
    const query = `
      SELECT *
      FROM pg_database
      WHERE datname = $1;
    `;

    // Execute the query with the database name
    const result = await pool.query(query, [databaseName]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Database not found' });
    }

    // Send the details of the database as the response
    return res.status(200).json({ database: result.rows[0] });
  } catch (err) {
    console.error('Error fetching database:', err);

    // Error handling
    const serverError = new ServerErrorEvent(req.user, `Fetch database failed`);
    myEmitterErrors.emit('error', serverError);
    return res.status(serverError.code).json({ message: serverError.message });
  }
};

export const createTableHelper = async (req, res) => {
  console.log('createTableHelper');

  try {
    return sendDataResponse(res, 200, { table: '' });
  } catch (err) {
    //
    const serverError = new ServerErrorEvent(req.user, `Create table failed`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

// const foundEvents = await findAll();
// console.log('found events:', foundEvents);

// if (!foundEvents) {
//   const notFound = new NotFoundEvent(
//     req.user,
//     EVENT_MESSAGES.notFound,
//     EVENT_MESSAGES.eventTag
//   );
//   myEmitterErrors.emit('error', notFound);
//   return sendMessageResponse(res, notFound.code, notFound.message);
// }

/*!
 * evolutility-server-node :: routes.js
 *
 * https://github.com/evoluteur/evolutility-server-node
 * (c) 2024 Olivier Giulieri
 */

import express from "express";
import logger from "./utils/logger.js";
import { uploadOne } from "./utils/upload.js";
import config from "../config.js";
import crud from "./crud.js";
import { getMany } from "./list.js";
import { lovOne } from "./lov.js";
import { getStats } from "./stats.js";
import { getChart } from "./charts.js";
import { getAPIs, getVersion } from "./info.js";
import designer from "./designer.js";
import dbStructure from "./utils/db-structure.js";

const apiPath = config.apiPath;
const router = express.Router();

logger.startupMessage();

/*
// ======  file server ====================================
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../', '../', 'index.html'));
}); */

// ======  APIs DISCOVERY ====================================
if (config.apiInfo) {
  router.get(apiPath + "/", getAPIs);
}

// ======  Version ====================================
router.get(apiPath + "version", getVersion);

// ====== DB: query for list of tables and columns ====================================
if (config.schemaQueries) {
  // - all tables (except evol*)
  router.get(apiPath + "db/tables", dbStructure.getTables);
  // - columns of specific table
  router.get(apiPath + "db/:table/columns", dbStructure.getColumns);
}

// ======  Models in DB ====================================
if (config.apiDesigner) {
  // - Models
  //router.post(apiPath+'meta/model', designer.importModel);
  router.get(apiPath + "meta/models", designer.getModels);
  router.get(apiPath + "meta/model/:id", designer.getModel);
}

// ======  GET STATS ====================================
router.get(apiPath + ":entity/stats", getStats);

// ======  LIST ====================================
// -  GET MANY -
router.get(apiPath + ":entity", getMany);

// ======  CRUD ====================================
// -  GET ONE   -
router.get(apiPath + ":entity/:id", crud.getOne);
// -  INSERT ONE -
router.post(apiPath + ":entity", crud.insertOne);
// -  UPDATE ONE  -
router.patch(apiPath + ":entity/:id", crud.updateOne);
router.put(apiPath + ":entity/:id", crud.updateOne);
router.post(apiPath + ":entity/upload/:id", uploadOne);
// -  DELETE ONE -
router.delete(apiPath + ":entity/:id", crud.deleteX);
// -  SUB-COLLECTIONS  -
router.get(apiPath + ":entity/collec/:collec", crud.getCollectionsOne);

// ======  LOV ====================================
router.get(apiPath + ":entity/lov/:field", lovOne);
//TODO:
// lovUpdate
// lovAdd

// ======  GET CHARTS ====================================
router.get(apiPath + ":entity/chart/:field", getChart);

export default router;

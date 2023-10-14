// Create tables to store the custom items and any other data your web app will need to work with.

import { pool } from '../config/database.js'
import '../config/dotenv.js'
import exteriorData from '../data/exterior.js'
import interiorData from '../data/exterior.js'
import wheelsData from '../data/wheels.js'
import roofData from '../data/roof.js'
import carData from '../data/car.js'

const createExteriorTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS exterior;

        CREATE TABLE IF NOT EXISTS exterior (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            pricePoint VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL
        )
    `;

    try {
        const res = await pool.query(createTableQuery);
        console.log('🎉 exterior table created successfully');
    } catch (err) {
        console.error('⚠️ error creating exterior table', err);
    }
};

const createInteriorTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS interior;

        CREATE TABLE IF NOT EXISTS interior (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            pricePoint VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL
        )
    `;

    try {
        const res = await pool.query(createTableQuery);
        console.log('🎉 interior table created successfully');
    } catch (err) {
        console.error('⚠️ error creating interior table', err);
    }
};

const createWheelsTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS wheels;

        CREATE TABLE IF NOT EXISTS wheels (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            pricePoint VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL
        )
    `;

    try {
        const res = await pool.query(createTableQuery);
        console.log('🎉 wheels table created successfully');
    } catch (err) {
        console.error('⚠️ error creating wheels table', err);
    }
};

const createRoofTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS roof;

        CREATE TABLE IF NOT EXISTS roof (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            pricePoint VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL
        )
    `;

    try {
        const res = await pool.query(createTableQuery);
        console.log('🎉 roof table created successfully');
    } catch (err) {
        console.error('⚠️ error creating roof table', err);
    }
};

const createCarTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS car;

        CREATE TABLE IF NOT EXISTS car (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            exterior VARCHAR(255) NOT NULL,
            interior VARCHAR(255) NOT NULL,
            roof VARCHAR(255) NOT NULL,
            wheels VARCHAR(255) NOT NULL,
            pricepoint VARCHAR(255) NOT NULL
        )
    `;

    try {
        const res = await pool.query(createTableQuery);
        console.log('🎉 car table created successfully');
    } catch (err) {
        console.error('⚠️ error creating car table', err);
    }
};

const seedExteriorTable = async () => {
    await createExteriorTable();

    exteriorData.forEach((exterior) => {
        const insertQuery = {
            text: 'INSERT INTO exterior (name, pricePoint, image) VALUES ($1, $2, $3)'
        };

        const values = [exterior.name, exterior.pricePoint, exterior.image];

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting exterior', err);
                return;
            }

            console.log(`✅ Exterior "${exterior.name}" added successfully`);
        });
    });
};

const seedInteriorTable = async () => {
    await createInteriorTable();

    interiorData.forEach((interior) => {
        const insertQuery = {
            text: 'INSERT INTO interior (name, pricePoint, image) VALUES ($1, $2, $3)'
        };

        const values = [interior.name, interior.pricePoint, interior.image];

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting interior', err);
                return;
            }

            console.log(`✅ Interior "${interior.name}" added successfully`);
        });
    });
};

const seedWheelsTable = async () => {
    await createWheelsTable();

    wheelsData.forEach((wheels) => {
        const insertQuery = {
            text: 'INSERT INTO wheels (name, pricePoint, image) VALUES ($1, $2, $3)'
        };

        const values = [wheels.name, wheels.pricePoint, wheels.image];

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting wheels', err);
                return;
            }

            console.log(`✅ Wheels "${wheels.name}" added successfully`);
        });
    });
};

const seedRoofTable = async () => {
    await createRoofTable();

    roofData.forEach((roof) => {
        const insertQuery = {
            text: 'INSERT INTO roof (name, pricePoint, image) VALUES ($1, $2, $3)'
        };

        const values = [roof.name, roof.pricePoint, roof.image];

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting roof', err);
                return;
            }

            console.log(`✅ Roof "${roof.name}" added successfully`);
        });
    });
};

const seedCarTable = async () => {
    await createCarTable();

    carData.forEach((car) => {
        const insertQuery = {
            text: 'INSERT INTO car (name, exterior, interior, roof, wheels, pricePoint) VALUES ($1, $2, $3, $4, $5, $6)'
        };

        const values = [car.name, car.exterior, car.interior, car.roof, car.wheels, car.pricePoint];

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting car', err);
                return;
            }

            console.log(`✅ Car "${car.name}" added successfully`);
        });
    });
};

seedExteriorTable();
seedInteriorTable();
seedWheelsTable();
seedRoofTable();
seedCarTable();
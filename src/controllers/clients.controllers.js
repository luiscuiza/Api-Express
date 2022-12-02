import { pool } from "../db.js";

export const getClients = async (req, ans) => {
    try {
        const [rows] = await pool.query("SELECT * FROM client");
        ans.json(rows);
    } catch (error) {
        return ans.send("There was an error!");
    }
};

export const getClient = async (req, ans) => {
    try {
        const [rows] = await pool.query(
            "SELECT * FROM client WHERE id_client=?",
            req.params.id
        );
        if (rows.length <= 0) return ans.send("Customer not found!");
        ans.json(rows);
    } catch (error) {
        return ans.send("There was an error!");
    }
};

export const postClient = async (req, ans) => {
    const { id_client, dni, first_name, last_name, address, phone } = req.body;
    try {
        const [rows] = await pool.query(
            "INSERT INTO client (id_client, dni, first_name, last_name, address, phone) VALUES (?, ?, ?, ?, ?, ?)",
            [id_client, dni, first_name, last_name, address, phone]
        );
        ans.json(rows);
    } catch (error) {
        return ans.send("There was an error!");
    }
};

export const putClient = (req, ans) => {
    ans.send("Modifying customer data from constrollers");
};

export const patchClient = async (req, ans) => {
    const { id } = req.params;
    const { id_client, dni, first_name, last_name, address, phone } = req.body;
    try {
        const [rows] = await pool.query(
            "UPDATE client SET id_client=IFNULL(?, id_client), dni=IFNULL(?, dni), first_name=IFNULL(?, first_name), last_name=IFNULL(?, last_name), address=IFNULL(?, address), phone=IFNULL(?, phone) WHERE id_client=?",
            [id_client, dni, first_name, last_name, address, phone, id]
        );
        if (rows.affectedRows === 0) return ans.send("Customer not found!");
        ans.json(rows);
    } catch (error) {
        return ans.send("There was an error!");
    }
};

export const deleteClient = async (req, ans) => {
    try {
        const [rows] = await pool.query(
            "DELETE FROM client WHERE id_client=?",
            req.params.id
        );
        if (rows.affectedRows === 0) return ans.send("Customer not found!");
        ans.json(rows);
    } catch (error) {
        return ans.send("There was an error!");
    }
};

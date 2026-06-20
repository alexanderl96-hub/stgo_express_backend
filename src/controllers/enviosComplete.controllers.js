import pool from "../db.js";


export const getEnviosComplete =
  async (req, res) => {

    try {

      const result =
        await pool.query(
          `
          SELECT *
          FROM envios_complete
          ORDER BY id DESC
          `
        );

      res.json(
        result.rows
      );

    } catch (error) {

      console.error(error);

      res
        .status(500)
        .json({
          success: false,
          message:
            error.message
        });
    }
  };

export const getEnvioComplete =
  async (req, res) => {

    const { id } =
      req.params;

    try {

      const result =
        await pool.query(
          `
          SELECT *
          FROM envios_complete
          WHERE id = $1
          `,
          [id]
        );

      if (
        !result.rows.length
      ) {

        return res
          .status(404)
          .json({
            success: false,
            message:
              "Envio not found"
          });
      }

      res.json(
        result.rows[0]
      );

    } catch (error) {

      console.error(error);

      res
        .status(500)
        .json({
          success: false,
          message:
            error.message
        });
    }
  };

export const createEnvioComplete =
  async (req, res) => {

    const {
      products_id = [],
      count_items = 0,
      envio_price = 0,
      count_products_price = 0,
      total_revenew = 0
    } = req.body;

    try {

      const result =
        await pool.query(
          `
          INSERT INTO
          envios_complete
          (
            products_id,
            count_items,
            envio_price,
            count_products_price,
            total_revenew
          )
          VALUES
          (
            $1,
            $2,
            $3,
            $4,
            $5
          )
          RETURNING *
          `,
          [
            JSON.stringify(
              products_id
            ),
            count_items,
            envio_price,
            count_products_price,
            total_revenew
          ]
        );

      res.status(201).json({
        success: true,
        envio:
          result.rows[0]
      });

    } catch (error) {

      console.error(error);

      res
        .status(500)
        .json({
          success: false,
          message:
            error.message
        });
    }
  };

export const updateEnvioComplete =
  async (req, res) => {

    const { id } =
      req.params;

    const {
      products_id,
      count_items,
      envio_price,
      count_products_price,
      total_revenew
    } = req.body;

    try {

      const result =
        await pool.query(
          `
          UPDATE
          envios_complete
          SET
            products_id = $1,
            count_items = $2,
            envio_price = $3,
            count_products_price = $4,
            total_revenew = $5
          WHERE id = $6
          RETURNING *
          `,
          [
            JSON.stringify(
              products_id || []
            ),
            count_items,
            envio_price,
            count_products_price,
            total_revenew,
            id
          ]
        );

      if (
        !result.rows.length
      ) {

        return res
          .status(404)
          .json({
            success: false,
            message:
              "Envio not found"
          });
      }

      res.json({
        success: true,
        envio:
          result.rows[0]
      });

    } catch (error) {

      console.error(error);

      res
        .status(500)
        .json({
          success: false,
          message:
            error.message
        });
    }
  };

export const deleteEnvioComplete =
  async (req, res) => {

    const { id } =
      req.params;

    try {

      const result =
        await pool.query(
          `
          DELETE
          FROM envios_complete
          WHERE id = $1
          RETURNING *
          `,
          [id]
        );

      if (
        !result.rows.length
      ) {

        return res
          .status(404)
          .json({
            success: false,
            message:
              "Envio not found"
          });
      }

      res.json({
        success: true,
        message:
          "Envio deleted"
      });

    } catch (error) {

      console.error(error);

      res
        .status(500)
        .json({
          success: false,
          message:
            error.message
        });
    }
  };
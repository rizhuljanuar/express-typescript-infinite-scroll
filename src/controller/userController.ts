import { Request, Response, NextFunction } from "express";
import user from "../models/user";
import { Op } from "sequelize";

class User {
  async get(req: Request, res: Response, next: NextFunction) {
    try {
      const query = req.query as {
        lastId: string;
        limit: string;
        search_query: string;
      };
      const last_id = parseInt(query.lastId) || 0;
      const limit = parseInt(query.limit) || 10;
      const search = query.search_query || "";

      let result: any = [];
      if (last_id < 1) {
        const results = await user.findAll({
          where: {
            [Op.or]: [
              {
                name: {
                  [Op.like]: "%" + search + "%",
                },
              },
              {
                email: {
                  [Op.like]: "%" + search + "%",
                },
              },
            ],
          },
          limit: limit,
          order: [["id", "DESC"]],
        });
        result = results;
      } else {
        const results = await user.findAll({
          where: {
            id: {
              [Op.lt]: last_id,
            },
            [Op.or]: [
              {
                name: {
                  [Op.like]: "%" + search + "%",
                },
              },
              {
                email: {
                  [Op.like]: "%" + search + "%",
                },
              },
            ],
          },
          limit: limit,
          order: [["id", "DESC"]],
        });
        result = results;
      }

      return res.json({
        result: result,
        lastId: result.length ? result[result.length - 1].id : 0,
        hasMore: result.length >= limit ? true : false,
      });
    } catch (error) {
      return next(error);
    }
  }
}

export default User;

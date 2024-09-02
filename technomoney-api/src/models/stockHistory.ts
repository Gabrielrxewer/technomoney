import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";

class StockHistory extends Model {
  public id!: number;
  public symbol!: string;
  public date!: Date;
  public date_utc!: number;
  public open!: number;
  public high!: number;
  public low!: number;
  public close!: number;
  public volume!: number;
  public adjclose!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

StockHistory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    symbol: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY, 
      allowNull: false,
    },
    date_utc: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    open: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    high: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    low: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    close: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    volume: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    adjclose: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "StockHistories",
  }
);

export default StockHistory;

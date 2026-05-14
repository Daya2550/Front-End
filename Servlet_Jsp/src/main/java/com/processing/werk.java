package com.processing;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import com.bin.copy.binclass;
import com.mysql.cj.jdbc.MysqlDataSource;

public class werk {

    private static final String INSERT_QUERY =
            "INSERT INTO vender VALUES (?, ?, ?)";

    public int regStatementExecution(binclass vendor) {

        int result = 0;

        MysqlDataSource dataSource = new MysqlDataSource();

        dataSource.setUser("root");
        dataSource.setPassword("2550");
        dataSource.setDatabaseName("myservlet");
        dataSource.setServerName("localhost");
        dataSource.setPort(3306);

        try (
                Connection connection = dataSource.getConnection();

                PreparedStatement statement =
                        connection.prepareStatement(INSERT_QUERY)
        ) {

            statement.setString(1, vendor.getId());
            statement.setString(2, vendor.getName());
            statement.setString(3, vendor.getNo());

            result = statement.executeUpdate();

        } catch (SQLException e) {

            e.printStackTrace();
        }

        return result;
    }
}
package com.example.systemutviklingoblig2;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Repository
public class BilettRepository {
    @Autowired
    public JdbcTemplate db;


    public void nyBilett(Bilett bilett) {
        System.out.println(bilett.getSeter());
        String sql = "INSERT INTO bilett(film,fornavn,etternavn,epost,tellefonnummer,antall,seter) VALUES (?,?,?,?,?,?,?)";
        db.update(sql,bilett.getFilm(),bilett.getFornavn(),bilett.getEtternavn(),bilett.getEpost(),bilett.getTellefonnummer(),bilett.getAntall(),bilett.getSeter());
    }

    public String hentSeter(String movie) {

        String sql = "SELECT seter FROM bilett WHERE film = ?";
        List<String> seterList = db.queryForList(sql, String.class, movie);
        //System.out.println(movie);
        // Create a list of all seats for the specified movie
        List<String> allSeats = new ArrayList<>();

        for (String seter : seterList) {

            // Split the seter string (assuming it's a comma-separated list)
            String[] seats = seter.split(",");
            allSeats.addAll(Arrays.asList(seats));
        }

        // Convert the list of seats to a comma-separated string
        String seterString = String.join(",", allSeats);

        return seterString;
    }

    public Bilett hentEnBilett(int id) {
        String sql = "SELECT * FROM bilett WHERE id=?";
        Object[] objectID = new Object[1];
        objectID[0] = id;
        Bilett enBilett = db.queryForObject(sql, objectID, BeanPropertyRowMapper.newInstance(Bilett.class));
        return enBilett;
    }

    public List<Bilett> hentAlleBiletter() {
        String sql = "SELECT * FROM bilett ORDER BY etternavn";
        List<Bilett> bilettList = db.query(sql, new BeanPropertyRowMapper<>(Bilett.class));
        return bilettList;
    }



    public void endreEnBilett(Bilett bilett) {
        System.out.println("biletten med id: "+bilett.getId());

        String sql = "UPDATE bilett SET film=?,fornavn=?,etternavn=?,epost=?,tellefonnummer=?,antall=? WHERE id=?";
        db.update(sql,bilett.getFilm(),bilett.getFornavn(),bilett.getEtternavn(),bilett.getEpost(),bilett.getTellefonnummer(),bilett.getAntall(),bilett.getId());
        System.out.println("biletten med id: "+bilett.getId()+"har blitt endret");
    }

    public void slettBilett(int id) {
        String sql = "DELETE FROM bilett WHERE id=?";
        db.update(sql,id);
    }

    public void slettAlleBiletter () {
        String sql = "DELETE FROM bilett";
        db.update(sql);
    }



}

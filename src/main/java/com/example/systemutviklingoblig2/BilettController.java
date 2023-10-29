package com.example.systemutviklingoblig2;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BilettController {
    @Autowired
    BilettRepository rep;

    @PostMapping("/nyBilett")
    public void nyBilett(Bilett bilett){
        rep.nyBilett(bilett);
    }
    @GetMapping("/alleBiletter")
    public List<Bilett> hentAlleBiletter(){
        return rep.hentAlleBiletter();
    }
    @GetMapping("/hentEnBilett")
    public Bilett hentEnBilett(int id){
        return rep.hentEnBilett(id);
    }
    @PostMapping("/endreEnBilett")
    public void endreEnBilett(Bilett bilett){
        rep.endreEnBilett(bilett);
    }
    @GetMapping("/hentSeter")
    public String hentSeter(String film){
        System.out.println(film);
        return rep.hentSeter(film);
    }


    // Sletting av biletter
    @GetMapping("/slettBilett")
    public void slettBilett(int id){
        rep.slettBilett(id);
    }
    @GetMapping("/slettAlleBiletter")
    public void slettAlleBiletter(){
        rep.slettAlleBiletter();
    }

}

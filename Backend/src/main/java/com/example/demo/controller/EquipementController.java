package com.example.demo.controller;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Equipement;
import com.example.demo.repository.EquipementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/")
public class EquipementController {

    @Autowired
    private EquipementRepository equipementRepository;

    //get all equipments
    @GetMapping("/equipements")
    public List<Equipement> getAllEquipements(){
      return   equipementRepository.findAll();

    }

    @GetMapping("/{numSerie}")
    public Optional<Equipement> getEquipement( @PathVariable String numSerie){
        return equipementRepository.findById(numSerie);
    }

    //create equipment reat api
    @PostMapping("/equipement")
    public Equipement createEquipment(@RequestBody Equipement equipment){
        return equipementRepository.save(equipment);
    }
    @DeleteMapping("/{numSerie}")
    public ResponseEntity<Map<String, Boolean>> deletePatient(@PathVariable String numSerie){
        Equipement equipement = equipementRepository.findById(numSerie)
                .orElseThrow(() -> new ResourceNotFoundException("equipment not exist with id :" + numSerie));

        equipementRepository.delete(equipement);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    //update equipment
    @PutMapping("/{num_serie}")
    public ResponseEntity<Equipement> updateEquipement(@PathVariable String num_serie, @RequestBody Equipement equipmentDetails){
        Equipement equipement = equipementRepository.findById(num_serie).orElseThrow(()->new ResourceNotFoundException("equipment not found"));

        equipement.setNom(equipmentDetails.getNom());
        equipement.setDesignation(equipmentDetails.getDesignation());
        equipement.setMarque(equipmentDetails.getMarque());
        equipement.setMadele(equipmentDetails.getMadele());
        equipement.setDetails(equipmentDetails.getDetails());
        equipement.setDate(equipmentDetails.getDate());
        Equipement updatedPatient = equipementRepository.save(equipement);
        return ResponseEntity.ok(updatedPatient);
    }

}

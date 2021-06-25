package com.example.coreplayers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



@CrossOrigin//(origins="http://localhost:3000")
@RestController
@RequestMapping("/api")

public class PlayerController {
//Might have to add stuff here to make react work right!
	@Autowired
	private PlayerRepository playerRepo;
	
	@GetMapping("/allplayers")
	public List<Player> getAllStudents()
	{
		return playerRepo.findAll();
	}
	@PostMapping("/addplayer")
	public Player newPlayer(@RequestBody Player k)
	{
		return playerRepo.save(k);
	}

	@GetMapping("/players/{name}")
	public List<Player> getStudentByName(@PathVariable String name){
		return playerRepo.findByName(name);
	}
	
	@GetMapping("/player/{id}")
	public ResponseEntity<Player> getStudentById(@PathVariable int id)
	{
		Player s = playerRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Player Not Found"));
		return ResponseEntity.ok(s);
	}
	
	@PutMapping("/player/{id}")
	public ResponseEntity<Player> updatePlayer(@PathVariable int id, @RequestBody Player player)
	{
		Player s=playerRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Player not found"));
		s.setUsername(player.getUsername());
		s.setEmail(player.getEmail());
		Player updatedPlayer=playerRepo.save(s);
		return ResponseEntity.ok(updatedPlayer);
	}
 
	
//	@DeleteMapping("/player/{email}")
//	public String deletePlayer(@PathVariable String email) {
//	Player k = playerRepo.findByEmail(email).orElseThrow(() -> new ResourceNotFoundException("Player not found"));
//	playerRepo.deleteByEmail(k);
//	return "The player with id: " + email + " is removed from the database";
//	}
	@DeleteMapping("/player/{id}")
	public String deletePlayer(@PathVariable int id) {
		Player k = playerRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Player not found"));
		playerRepo.delete(k);
		return "The player with id: " + id + " is removed from the database";
	}
	


}
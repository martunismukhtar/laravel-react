<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;

class CompanyTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
   
    public function testWrongMethodeGetIndex() {
        $response = $this->get('/api/company');

        $response->assertStatus(405);
        
    }
    
    public function testPostIndex() {
        $response = $this->post('/api/company');

        $response->assertStatus(200);
        
    }
    
    public function testMyCompanyWithoutPermission() {
        $response = $this->post('/api/mycompany');

        $response->assertStatus(401);
        
    }
    
    public function testMyCompanyWithPermisson () {
        
        $user = User::factory()->create();

        $response = $this->actingAs($user);
        
        $response = $this->postJson('/api/mycompany', ['userid' => 1]);
        
        $response->assertStatus(200);        
       
    }
    
    public function testMyCompanyWithPermissonWithWrongDataType () {
        
        $user = User::factory()->create();

        $response = $this->actingAs($user);
        
        $response = $this->postJson('/api/mycompany', ['userid' => 'as']);
        
        $response->assertStatus(422);        
       
    }
    
    public function testMyCompanyWithPermissonWithWrongDataColumn () {
        
        $user = User::factory()->create();

        $response = $this->actingAs($user);
        
        $response = $this->postJson('/api/mycompany', ['useridx' => 'as']);
        
        $response->assertStatus(422);        
       
    }
    
    public function testAddFavoriteWithoutPermission () {
        
        $response = $this->postJson('/api/addfavorite', ['userid' => 1, 'id' => 1]);
        
        $response->assertStatus(401);        
       
    }
    
    public function testAddFavoriteWithPermissionWithWrongDataColumn () {
        
        $user = User::factory()->create();

        $response = $this->actingAs($user);
        
        $response = $this->postJson('/api/addfavorite', ['userid' => 1]);
        
        $response->assertStatus(422);        
       
    }
    
    public function testAddFavoriteWithPermissionWithWrongDataType () {
        
        $user = User::factory()->create();

        $response = $this->actingAs($user);
        
        $response = $this->postJson('/api/addfavorite', ['userid' => 1, 'id' => 'a']);
        
        $response->assertStatus(422);        
       
    }
    
    public function testAddFavoriteWithPermission () {
        
        $user = User::factory()->create();

        $response = $this->actingAs($user);
        
        $response = $this->postJson('/api/addfavorite', ['userid' => 1, 'id' => 1]);
        
        $response->assertStatus(200);        
       
    }
    
    public function testRemoveFavoriteWithoutPermission () {
        
        $response = $this->postJson('/api/removefavorite', ['userid' => 1]);
        
        $response->assertStatus(401);        
       
    }
    
    public function testRemoveFavoriteWithPermissionWithWrongDataColumn () {
        
        $user = User::factory()->create();

        $response = $this->actingAs($user);
        
        $response = $this->postJson('/api/removefavorite', ['userid' => 1]);
        
        $response->assertStatus(422);        
       
    }
    
    public function testRemoveFavoriteWithPermissionWithWrongDataType () {
        
        $user = User::factory()->create();

        $response = $this->actingAs($user);
        
        $response = $this->postJson('/api/removefavorite', ['id' => 'as']);
        
        $response->assertStatus(422);        
       
    }
    
    public function testRemoveFavoriteWithPermission () {
        
        $user = User::factory()->create();

        $response = $this->actingAs($user);
        
        $response = $this->postJson('/api/removefavorite', ['id' => 1]);
        
        $response->assertStatus(200);        
       
    }
}

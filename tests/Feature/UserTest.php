<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;

class UserTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
//    public function testRegisterWrongMethode() {
//        $response = $this->get('/api/register');
//
//        $response->assertStatus(405);
//        
//    }
    
    public function testRegisterWithoutPost() {
        $response = $this->post('/api/register');

        $response->assertStatus(422);
        
    }
    
    public function testRegisterWithPosWithEmail() {
        
        $response = $this->post('/api/register');
        $response = $this->postJson('/api/register', ['email' => 'abb', 'username'=>'aaabbb', 'password' => 'aa11ee44', 
            'password_confirmation' => 'aa11ee44',
            'name'=>'ssssbbb', 'phone_number'=>'21312', 'address'=>'xxxxxxxxxxx']);
        
        $response->assertStatus(422);
        
    }
    
    public function testRegisterWithPosWithNotMatchingPassword() {
        
        $response = $this->post('/api/register');
        $response = $this->postJson('/api/register', ['email' => 'abaab@example.com', 'username'=>'aaabbb', 'password' => 'aqa11ee44', 
            'password_confirmation' => 'aa11ee44',
            'name'=>'ssssbbb', 'phone_number'=>'21312', 'address'=>'xxxxxxxxxxx']);
        
        $response->assertStatus(422);
        
    }
    
    public function testRegisterWithPost() {
        
        $response = $this->post('/api/register');
        $response = $this->postJson('/api/register', ['email' => 'abb@example.com', 'username'=>'aaa', 'password' => 'aa11ee44', 
            'password_confirmation' => 'aa11ee44',
            'name'=>'ssss', 'phone_number'=>'21312', 'address'=>'xxxxxxxxxxx']);
        
        $response->assertStatus(200);
        
    }
    
    public function testLoginWithWrogData() {
        
        $response = $this->post('/api/login');
        $response = $this->postJson('/api/login', ['email' => 'xxx@xxx.com', 'password' => 'martunisaaaa']);
        
        $response->assertStatus(401);
        
    }
    
    public function testLogin() {
        
        $response = $this->post('/api/login');
        $response = $this->postJson('/api/login', ['email' => 'xxx@xxx.com', 'password' => 'martunis']);
        
        $response->assertStatus(200);
        
    }
}

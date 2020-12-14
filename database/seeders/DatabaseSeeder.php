<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Martunis',
            'email' => 'martunismukhtar@gmail.com',
            'password' => Hash::make('12345'),
        ]);
        
        DB::table('company')->insert([
            'name' => 'Google',
            'address' => 'xxxx xxxxxxxxxxx xxx xxxxxxxxxxxxxxxxxx xxx xxxxxxxxxxxx xx',
            'phone_number' => '887899899',
        ]);
        DB::table('company')->insert([
            'name' => 'Microsoft',
            'address' => 'xxxx xxxxxxxxxxx xxx xxxxxxxxxxxxxxxxxx xxx xxxxxxxxxxxx xx',
            'phone_number' => '887899899',
        ]);
        
        DB::table('company')->insert([
            'name' => 'Facebook',
            'address' => 'xxxx xxxxxxxxxxx xxx xxxxxxxxxxxxxxxxxx xxx xxxxxxxxxxxx xx',
            'phone_number' => '887899899',
        ]);
        
        DB::table('company')->insert([
            'name' => 'Twittwer',
            'address' => 'xxxx xxxxxxxxxxx xxx xxxxxxxxxxxxxxxxxx xxx xxxxxxxxxxxx xx',
            'phone_number' => '887899899',
        ]);
        
        // \App\Models\User::factory(10)->create();
    }
}

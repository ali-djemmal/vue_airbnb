<?php

use App\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'admin',
            'email' => 'supera@poste.dz',
            'password' => Hash::make('secret'),
            'saved' => [1, 5, 7, 9],
        ]);

    }
}

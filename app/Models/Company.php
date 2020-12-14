<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Company extends Model {
    
    protected $table = 'company';
    
    protected $fillable = [
        'name',
        'address',
        'phone_number'
    ];
    
    public function user() {
        return $this->belongsToMany(User::class);
    }
    
}


<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    use HasFactory;
    protected $table = 'admin_users';
    protected $fillable = ['first_name', 'last_name', 'email', 'profile_picture', 'password', 'password_token', 'is_active'];
}
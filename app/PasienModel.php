<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PasienModel extends Model
{
    protected $fillable = [
        'nama_pasien', 'no_hp', 'alamat',
    ];

    protected $table = "tb_pasien";
}

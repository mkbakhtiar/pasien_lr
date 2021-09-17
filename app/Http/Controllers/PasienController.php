<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PasienController extends Controller
{
    public function show(){
        $pasien = \App\PasienModel::all();
 
        return $pasien->toJson();
    }

    public function addProses(Request $request){
        $validatedData = $request->validate([
            'nama_pasien' => 'required',
            'no_hp' => 'required',
            'alamat' => 'required',
          ]);
   
          $project = \App\PasienModel::create([
            'nama_pasien' => $request->nama_pasien,
            'no_hp' => $request->no_hp,
            'alamat' => $request->alamat,
          ]);
          
          if($project){
            return response()->json([
                'success' => true,
                'message' => 'Tambah Pasien Berhasil',
            ], 200);
            }else{
                return response()->json('Tambah Pasien Gagal', 401);
            }
    }
    public function editProses(Request $request){
        $validatedData = $request->validate([
            'nama_pasien' => 'required',
            'no_hp' => 'required',
            'alamat' => 'required',
          ]);
   
            $dataReq = \App\PasienModel::find($request->id);
            $dataReq->nama_pasien = $validatedData['nama_pasien'];
            $dataReq->no_hp = $validatedData['no_hp'];
            $dataReq->alamat = $validatedData['alamat'];
            $dataReq->save();

          
          if($dataReq){
            return response()->json([
                'success' => true,
                'message' => 'Ubah Pasien Berhasil',
            ], 200);
            }else{
                return response()->json('Ubah Pasien Gagal', 401);
            }
    }
    public function getData($id){
     
        $pasien = \App\PasienModel::find($id);
 
        return $pasien->toJson();
    
    }
}

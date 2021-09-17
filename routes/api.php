<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/show-pasien', 'PasienController@show');
Route::get('/get-data/{id}', 'PasienController@getData');
Route::post('/add-proses', 'PasienController@addProses');
Route::post('/edit-proses', 'PasienController@editProses');
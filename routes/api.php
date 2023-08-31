<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Botble\Ecommerce\Http\Controllers\Fronts\PublicCheckoutController;

Route::post('/shop/callback', [PublicCheckoutController::class, 'getStkPushResult']);

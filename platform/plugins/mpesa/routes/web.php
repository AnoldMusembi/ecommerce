<?php

use Botble\mpesa\Http\Controllers\MpesaPaymentController;
use Illuminate\Support\Facades\Route;

Route::group([
    'controller' => MpesaPaymentController::class,
    'middleware' => ['core'],
    'prefix' => 'mpesa/payment',
], function () {
    Route::post('/success', 'success');
    Route::post('/fail', 'fail');
    Route::post('/cancel', 'cancel');
    Route::post('/ipn', 'ipn');
});

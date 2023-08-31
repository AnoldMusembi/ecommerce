<?php

use Botble\SslCommerz\Http\Controllers\SslCommerzPaymentController;
use Illuminate\Support\Facades\Route;

Route::group([
    'controller' => SslCommerzPaymentController::class,
    'middleware' => ['core'],
    'prefix' => 'M-pesa/payment',
], function () {
    Route::post('/success', 'success');
    Route::post('/fail', 'fail');
    Route::post('/cancel', 'cancel');
    Route::post('/ipn', 'ipn');
});

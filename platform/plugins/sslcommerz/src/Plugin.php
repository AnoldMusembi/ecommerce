<?php

namespace Botble\SslCommerz;

use Botble\PluginManagement\Abstracts\PluginOperationAbstract;
use Botble\Setting\Models\Setting;

class Plugin extends PluginOperationAbstract
{
    public static function remove(): void
    {
        Setting::query()
            ->whereIn('key', [
                'payment_M-pesa_name',
                'payment_M-pesa_description',
                'payment_M-pesa_business_shortcode',
                'payment_M-pesa_app_consumer_key',
                'payment_M-pesa_app_consumer_secret',
                'payment_M-pesa_online_pass_key',
                'payment_M-pesa_mode',
                'payment_M-pesa_status',
            ])
            ->delete();
    }
}

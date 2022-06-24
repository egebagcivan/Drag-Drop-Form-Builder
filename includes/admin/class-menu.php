<?php
function jotform_admin_menu() {
  add_menu_page('Jotform', 'Jotform', 'manage_options', 'jotform-admin-menu', 'jotform_admin_menu_main', 'data:image/svg+xml;base64,' . base64_encode( '<svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M231.287 450.612C237.601 456.733 233.139 467.221 224.173 467.221H168.06C156.989 467.221 147.98 458.488 147.98 447.756V393.358C147.98 384.666 158.799 380.341 165.113 386.462L231.287 450.612Z" fill="#0A1551"/>
    <path d="M319.003 454.845C302.393 438.343 302.394 411.589 319.003 395.088L378.947 335.535C395.557 319.033 422.486 319.033 439.096 335.535C455.705 352.036 455.705 378.79 439.096 395.292L379.152 454.845C362.542 471.346 335.613 471.346 319.003 454.845Z" fill="#FFB629"/>
    <path d="M160.64 305.204C144.031 288.703 144.031 261.949 160.64 245.447L261.52 145.155C278.129 128.653 305.059 128.653 321.669 145.155C338.278 161.656 338.278 188.41 321.669 204.912L220.789 305.204C204.179 321.705 177.25 321.705 160.64 305.204Z" fill="#0099FF"/>
    <path d="M243.108 376.686C226.498 360.185 226.498 333.43 243.108 316.929L379.414 181.511C396.024 165.009 422.953 165.009 439.563 181.511C456.173 198.012 456.173 224.766 439.563 241.268L303.256 376.686C286.647 393.187 259.717 393.187 243.108 376.686Z" fill="#FF6100"/>
    </svg>
    ' ), 4);
  add_submenu_page('jotform-admin-menu', 'Inbox', 'Inbox', 'manage_options', 'jotform-admin-menu-inbox', 'jotform_admin_menu_inbox');
  add_submenu_page('jotform-admin-menu', 'Account Settings', 'Account Settings', 'manage_options', 'jotform-admin-menu-accountsettings', 'jotform_admin_menu_accountSettings');
}
function jotform_admin_menu_main() {
  echo '<div class="wrap">Welcome to My Forms</div>';
}
function jotform_admin_menu_inbox() {
  echo '<div class="wrap">Inbox Section</div>';
}
function jotform_admin_menu_accountSettings() {
  echo '<div class="wrap">Aaccount Settings Section</div>';
}
add_action('admin_menu', 'jotform_admin_menu');
<?php
/**
 * Class Menu
 *
 * @since 1.0
 */
function jotform_admin_menu() {
  add_menu_page(
		'Jotform', 
		'Jotform', 
		'manage_options', 
		'jotform-admin-menu', 
		'jotform_admin_menu_main', 
		get_menu_icon(), 
		50);

  add_submenu_page(
		'jotform-admin-menu', 
		'Inbox', 
		'Inbox', 
		'manage_options', 
		'jotform-admin-menu-inbox', 
		'jotform_admin_menu_inbox');

  add_submenu_page(
		'jotform-admin-menu', 
		'Account Settings', 
		'Account Settings', 
		'manage_options', 
		'jotform-admin-menu-accountsettings', 
		'jotform_admin_menu_accountSettings');
}

function jotform_admin_menu_main() {
  echo 
	'<iframe src="https://www.jotform.com/platform/?product=myforms&client=wordpress" frameborder="0" scrolling="yes" seamless="seamless" style="margin-left: 0px; padding-left: 0px; display:block; width:100%; height:100vh;">
		</iframe>';
}
function jotform_admin_menu_inbox() {
  echo 
	'<iframe src="https://www.jotform.com/platform/?product=inbox&client=wordpress" frameborder="0" scrolling="yes" seamless="seamless" style="margin-left: 0px; padding-left: 0px; display:block; width:100%; height:100vh;">
		</iframe>';
}
function jotform_admin_menu_accountSettings() {
  echo 
	'<iframe src="https://jotform.com/platform/?product=myaccount&client=wordpress" frameborder="0" scrolling="yes" seamless="seamless" style="margin-left: 0px; padding-left: 0px; display:block; width:100%; height:100vh;">
		</iframe>';
}


	/**
	 * Jotform icon svg image.
	 *
	 * @return string
	 */
	function get_menu_icon() {
		ob_start();
    require_once JOTFORM_DRAGDROP_FORM_PLUGIN_DIR . 'includes/assets/jotform.svg';
		$svg = ob_get_clean();
		return 'data:image/svg+xml;base64,' . base64_encode( $svg );
	}
add_action('admin_menu', 'jotform_admin_menu');
add_action('admin_head', 'admin_styles');

function admin_styles() {
    echo '<style>
        #wpcontent {
            padding-left: 0px;
        }
    </style>';
}
?>
<?php
function jotform_admin_menu() {
  add_menu_page(
		'Jotform', 
		'Jotform', 
		'manage_options', 
		'jotform-admin-menu', 
		'jotform_admin_menu_main', 
		get_menu_icon(), 
		70);

  add_submenu_page(
		'jotform-admin-menu', 
		'Inbox', 'Inbox', 
		'manage_options', 
		'jotform-admin-menu-inbox', '
		jotform_admin_menu_inbox');

  add_submenu_page(
		'jotform-admin-menu', 
		'Account Settings', 
		'Account Settings', 
		'manage_options', 
		'jotform-admin-menu-accountsettings', 
		'jotform_admin_menu_accountSettings');
}

function jotform_admin_menu_main() {
  echo '<div class="wrap">
					<iframe src="http://jotform.com/myforms" frameborder="0" scrolling="yes" seamless="seamless" style="display:block; width:100%; height:100vh;">
					</iframe>
    		</div>';
}
function jotform_admin_menu_inbox() {
  echo '<div class="wrap">Inbox Section</div>';
}
function jotform_admin_menu_accountSettings() {
  echo '<div class="wrap">Account Settings Section</div>';
}

	/**
	 * Jotform icon svg image.
	 *
	 * @return string
	 */
	function get_menu_icon() {
		ob_start();
    require_once JOTFORM_DRAGDROP_FORM_PLUGIN_DIR . 'assets/jotform.svg';
		$svg = ob_get_clean();
		return 'data:image/svg+xml;base64,' . base64_encode( $svg );
	}

add_action('admin_menu', 'jotform_admin_menu');
?>
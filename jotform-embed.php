<?php
/**
 * Plugin Name:       Jotform Drag & Drop Form Builder
 * Plugin URI:        https://jotform.com
 * Description:       Create Forms Using Jotform v1
 * Author:            Jotform
 * Author URI:        https://jotform.com
 * Version:           1.0
 *
 * You should have received a copy of the GNU General Public License
 * along with Jotform. If not, see <https://www.gnu.org/licenses/>.
 */
// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
if ( ! defined( 'JOTFORM_DRAGDROP_FORM_VERSION' ) ) {
	/**
	 * Plugin version.
	 *
	 * @since 1.0.0
	 */
	define( 'JOTFORM_DRAGDROP_FORM_VERSION', '1.0' );
}

/* PATH DEFINE */
// Plugin Folder Path.
if ( ! defined( 'JOTFORM_DRAGDROP_FORM_PLUGIN_DIR' ) ) {
	define( 'JOTFORM_DRAGDROP_FORM_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
}
// Plugin Folder URL.
if ( ! defined( 'JOTFORM_DRAGDROP_FORM_PLUGIN_URL' ) ) {
	define( 'JOTFORM_DRAGDROP_FORM_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
}
// Plugin Root File.
if ( ! defined( 'JOTFORM_DRAGDROP_FORM_PLUGIN_FILE' ) ) {
	define( 'JOTFORM_DRAGDROP_FORM_PLUGIN_FILE', __FILE__ );
}

//yapı akismet e yakın olmalı
  // Admin/Dashboard only includes, also in ajax.
    require_once JOTFORM_DRAGDROP_FORM_PLUGIN_DIR . 'includes/class-menu.php';


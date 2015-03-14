const Lang = imports.lang;
const Applet = imports.ui.applet;
const GLib = imports.gi.GLib;
const Gettext = imports.gettext.domain('cinnamon-applets');
const _ = Gettext.gettext;

function MyApplet(orientation) {
    this._init(orientation);
}

MyApplet.prototype = {
	__proto__: Applet.TextApplet.prototype,
	_init: function(metadata, orientation, panel_height, instance_id) {
		Applet.TextApplet.prototype._init.call(this, orientation, panel_height, instance_id);
		this._updateAppletText();
		try {
			global.window_manager.connect('switch-workspace', Lang.bind(this, this._workspaceSwitched));
			global.display.connect('window-created', this._windowOpened);
		}
		catch(e){
			global.logError(e);
		}
	},
	_workspaceSwitched: function(event){
		global.log('workspace switched fired, number of workspaces: ' + global.screen.n_workspaces);
		try{
			for ( let i=0; i<global.screen.n_workspaces; ++i ) {
				//global.log("about to attempt to get a workspace...");
				let workspace = global.screen.get_workspace_by_index(i);
				//if(!workspace) global.log("uh oh workspace is falsey"); else global.log("got the workspace!");

				//global.log("number of windows in workspace: " + workspace.list_windows().length);
				
				if(workspace.list_windows().length === 1 && i !== 0 && i<global.screen.n_workspaces-1){
					//global.log('found a workspace to close! #' + i);
					global.screen.remove_workspace(workspace, global.get_current_time());
				}
			}
			this._updateAppletText();
		}
		catch(e) { global.log(e)}
	},
	_updateAppletText: function(){
		let currentIndex = global.screen.get_active_workspace_index() + 1;
		this.set_applet_label(currentIndex + '/' + global.screen.n_workspaces);
	},
	_windowOpened: function(){
		global.log('window opened fired');
		let lastWorkspaceIndex = global.screen.n_workspaces - 1;
		let workspace = global.screen.get_workspace_by_index(lastWorkspaceIndex);
		if(workspace.list_windows().length > 1){
			global.screen.append_new_workspace(false, global.get_current_time());
		}
	}
};

function main(metadata, orientation) {
    let myApplet = new MyApplet(orientation);
    return myApplet;
}

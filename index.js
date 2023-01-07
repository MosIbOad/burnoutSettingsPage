import * as alt from 'alt';
import * as native from 'natives';

alt.onServer('Player:GetPlayerSettings', (pm, adversiment, adminnotify, yayin) => {
    alt.emit('GetPlayerSettings', pm, adversiment, adminnotify, yayin);
})
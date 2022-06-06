<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.8" tiledversion="1.8.4" name="Prefabs" tilewidth="1300" tileheight="580" tilecount="25" columns="0" objectalignment="center">
 <grid orientation="orthogonal" width="1" height="1"/>
 <tile id="1">
  <image width="300" height="500" source="../../textures/bust_outline_small.png"/>
 </tile>
 <tile id="4">
  <image width="64" height="64" source="../../textures/earthtile.png"/>
 </tile>
 <tile id="6" type="Object">
  <properties>
   <property name="matchID" type="int" value="-1"/>
   <property name="textureID" value="ladder"/>
   <property name="type" value="ladder"/>
  </properties>
  <image width="77" height="377" source="../../textures/ladder.png"/>
 </tile>
 <tile id="7" type="Object">
  <properties>
   <property name="matchID" type="int" value="4"/>
   <property name="textureID" value="shelf"/>
   <property name="type" value="shelf"/>
  </properties>
  <image width="62" height="19" source="PrefabImages/shelf_rsz.png"/>
 </tile>
 <tile id="8">
  <image width="279" height="496" source="../../textures/vase_outline.png"/>
 </tile>
 <tile id="9">
  <image width="481" height="470" source="../../textures/yellow_frame_outline_thicker.png"/>
 </tile>
 <tile id="12" type="Object">
  <properties>
   <property name="juice" type="float" value="23"/>
   <property name="matchID" type="int" value="-1"/>
   <property name="pot_type" value=""/>
   <property name="type" value="plant"/>
  </properties>
  <image width="9" height="55" source="../../textures/branch.png"/>
 </tile>
 <tile id="16">
  <image width="1300" height="576" source="../../textures/foreground.png"/>
 </tile>
 <tile id="21" type="GameObject">
  <image width="40" height="72" source="PrefabImages/rsz_bust_small.png"/>
 </tile>
 <tile id="22" type="GameObject">
  <properties>
   <property name="isBreakable" type="int" value="1"/>
   <property name="outlineTextureID" value="owl_outline"/>
   <property name="textureID" value="cage"/>
   <property name="type" value="artifact:birdcage"/>
  </properties>
  <image width="40" height="40" source="PrefabImages/rsz_cage.png"/>
 </tile>
 <tile id="23" type="GameObject">
  <properties>
   <property name="isBreakable" type="int" value="1"/>
   <property name="outlineTextureID" value="painting_outline_1"/>
   <property name="textureID" value="crate02"/>
   <property name="type" value="fish"/>
  </properties>
  <image width="40" height="40" source="PrefabImages/rsz_fish_bowl.png"/>
 </tile>
 <tile id="24" type="GameObject">
  <properties>
   <property name="isBreakable" type="int" value="1"/>
   <property name="outlineTextureID" value="vase_outline"/>
   <property name="textureID" value="vase"/>
  </properties>
  <image width="26" height="41" source="PrefabImages/rsz_vase.png"/>
 </tile>
 <tile id="25" type="GameObject">
  <properties>
   <property name="outlineTextureID" value="painting_outline_1"/>
   <property name="textureID" value="crate02"/>
  </properties>
  <image width="40" height="40" source="PrefabImages/rsz_crate02.png"/>
 </tile>
 <tile id="26" type="GameObject">
  <properties>
   <property name="outlineTextureID" value="painting_outline2"/>
   <property name="textureID" value="frame2"/>
  </properties>
  <image width="40" height="40" source="PrefabImages/rsz_1frame2.png"/>
 </tile>
 <tile id="49">
  <image width="1024" height="580" source="PrefabImages/background_lounge.png"/>
 </tile>
 <tile id="50">
  <image width="1024" height="580" source="PrefabImages/background.png"/>
 </tile>
 <tile id="51">
  <image width="1024" height="580" source="PrefabImages/background_bath.png"/>
 </tile>
 <tile id="52">
  <image width="1024" height="580" source="PrefabImages/background_bed.png"/>
 </tile>
 <tile id="53">
  <image width="1024" height="580" source="PrefabImages/background_closet.png"/>
 </tile>
 <tile id="54">
  <image width="1024" height="580" source="PrefabImages/background_dining.png"/>
 </tile>
 <tile id="55">
  <image width="1024" height="580" source="PrefabImages/background_greenhouse.png"/>
 </tile>
 <tile id="56">
  <image width="1024" height="580" source="PrefabImages/background_kitchen.png"/>
 </tile>
 <tile id="57">
  <image width="1024" height="580" source="PrefabImages/background_library.png"/>
 </tile>
 <tile id="58">
  <image width="1024" height="580" source="PrefabImages/background_living_room.png"/>
 </tile>
 <tile id="61">
  <properties>
   <property name="textureID" value="dude"/>
   <property name="type" value="player"/>
  </properties>
  <image width="38" height="54" source="PrefabImages/jump_sprite_38x54.png"/>
 </tile>
</tileset>

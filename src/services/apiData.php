<?php 

require('api.php');

$url = $api::baseURL . "/index.php/SearchInterfaces/141";
   $request_fields = array(
    'SI357' => "*",
    'Thumbnails[]' => array('Large'),
    'Start' => $start,
    'Count' => $slicecount,
    'SearchType' => 'and'
   );
   $result = $api->request($url, $request_fields);
   header('Content-Type: application/json');
   $data =  json_encode($result);


?>
<script type="text/javascript">
  export const array = <?= json_encode($result); ?>;
  console.log(array)
</script>
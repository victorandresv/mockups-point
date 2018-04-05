jQuery(function($){

  $('#new-blog-tile').click(function(){
    $('#dialog-create .dialog-list-type').html('Blog');
    Metro.dialog.open('#dialog-create');
  });

  $('#new-image-tile').click(function(){
    $('#dialog-create .dialog-list-type').html('Image Library');
    Metro.dialog.open('#dialog-create');
  });

  $('#new-page-tile').click(function(){
    $('#dialog-create .dialog-list-type').html('Page');
    Metro.dialog.open('#dialog-create');
  });

  $('#new-custom-tile').click(function(){
    $('#dialog-create .dialog-list-type').html('Custom List');
    Metro.dialog.open('#dialog-create');
  });

  $('#new-document-tile').click(function(){
    $('#dialog-create .dialog-list-type').html('Document Library');
    Metro.dialog.open('#dialog-create');
  });
});

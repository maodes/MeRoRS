<td><%= name %></td>
<td><%= email %></td>
<td><%= position %></td>
<td><%= group %></td>
<td><%= active %></td>
<td>
  <a href="#users/<%= id %>" class="btn btn-small js-show">
    <i class="icon-eye-open"></i>
    Show
  </a>
  <a href="#users/<%= id %>/edit" class="btn btn-small js-edit">
    <i class="icon-pencil"></i>
      Edit
  </a>
  <button class="btn btn-small js-delete">
    <i class="icon-remove"></i>
    Delete
  </button>
</td>
import { Injectable } from '@angular/core';

@Injectable()
export class GridOptionService {
  getGridOption() {
    return {
			'margins': [5],
			'draggable': true,
			'resizable': true,
			'max_cols': 12,
			'max_rows': 0,
			'visible_cols': 0,
			'visible_rows': 0,
			'min_cols': 1,
			'min_rows': 1,
			'col_width': 2,
			'row_height': 2,
			'cascade': 'up',
			'min_width': 50,
			'min_height': 50,
			'fix_to_grid': false,
			'auto_style': true,
			'auto_resize': true,
			'maintain_ratio': false,
			'prefer_new': false,
			'zoom_on_drag': false,
			'limit_to_screen': false
    }
  }
}


// import 'module-alias/register';
import path from 'path';
import register from 'module-alias';
register({
  base: path.join(__dirname, '../'),
});

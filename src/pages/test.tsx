import { Controller, useForm } from 'react-hook-form';
const initValue = { numbers: [''] };
const Basic = () => {
  const { control, watch, setValue, getValues, handleSubmit } = useForm({
    mode: 'onSubmit',
    defaultValues: initValue,
  });
  const test = [1, 2, 3, 4];
  const numbers = watch('numbers') || [];
  const onSubmit = data => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="numbers"
        render={() => {
          return numbers.map((number, index) => {
            const onHandleChange = e => {
              const tmp = getValues('numbers');
              const result = tmp.map((item, _index) => {
                if (_index === index) return e.target.value;
                return item;
              });
              setValue('numbers', result);
            };
            return (
              <div>
                <div>
                  <input value={number} onChange={onHandleChange} />
                </div>
              </div>
            );
          });
        }}
      />
      <button
        onClick={() => {
          const tmp = getValues('numbers') || [];
          setValue('numbers', [...tmp, '']);
        }}
      >
        추가
      </button>
      <input type="submit" />
    </form>
  );
};
export default Basic;

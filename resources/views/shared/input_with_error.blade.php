<label for="{{ $field }}" class="inline-block mb-2 text-base font-medium">{{ $label }}</label>
<input type="{{ $type }}" name="{{ $name }}" id="{{ $field }}" value="{{ old($name) }}" class="form-input border-slate-200 focus:outline-none focus:border-blue disabled:bg-slate-100 disabled:border-slate-300 disabled:text-slate-500 placeholder:text-slate-400" placeholder="{{ $placeholder }}" {{ $isRequired ? 'required' : '' }}>
@error($name)
<div class="mt-1 text-sm text-red-500">{{ $message }}</div>
@enderror

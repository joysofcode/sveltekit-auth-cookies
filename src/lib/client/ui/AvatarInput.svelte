<script lang="ts">
	import Avatar from "./Avatar.svelte"

  export let name: string;
  export let value: string;
  export let required: boolean = false;
  export let disabled: boolean = false;

  export let size: number = 100;
  
  let fileinput: HTMLInputElement;

  let base64Input: HTMLInputElement;

  const onFileSelected =(e: any)=>{
    let image = e.target.files[0];
    console.log(image);
    let reader = new FileReader();
    reader.readAsDataURL(image);
    
    reader.onload = (e: any) => {
      value = e.target.result;
      base64Input.value = value;
      console.log(value);
    };
  }
</script>

<div style={`width:${size}px;height:${size}px`}>
  <label for={name} />
  <Avatar src={value} size={size} />
  <button class="edit" on:click={()=>{fileinput.click();}} style={`position:absolute;top:calc(${size}px - ${0.3*size}px);left:calc(${size}px - ${0.3*size}px);height:${0.3*size}px;width:${0.3*size}px`}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-arrow-up-fill" viewBox="0 0 16 16">
      <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 5.146a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2z"/>
    </svg>
  </button>
  <input id="fileInput" name="fileInput" type="file" accept="image/*" max="500000" required={required} disabled={disabled} on:change={(e)=>onFileSelected(e)} bind:this={fileinput} />
  <input id={name} name={name} type="text" required={required} disabled={disabled} bind:this={base64Input} />
</div>

<style lang="scss">
  div {
    display: flex;
    position: relative;
    button {
      svg {
        transform: translateX(-50%) translateY(-50%);
      }
    }
    input {
      display: none;
    }
  }
</style>
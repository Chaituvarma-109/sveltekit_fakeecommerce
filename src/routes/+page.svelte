<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;

    $: ({products} = data)
</script>

<div class="columns is-multiline mt-9">
    {#each products as product}
        <div class="box column is-one-quarter">
            <figure class="image is-4by3">
                <img src={product.image} alt="">
            </figure>
            <p class="title is-5">{product.title}</p>
            <div class="is-flex-direction-row is-align-content-space-evenly">
                <span class="subtitle is-6 tag is-info"><strong>Price: {product.price}</strong></span>
                <a href={`/product/${product.id}`} class="button is-link">view</a>
            </div>
        </div>
    {/each}
</div>

<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;

    $: ({product} = data)
</script>

<div class="tile is-ancestor m-6">
    <div class="tile is-vertical is-4">
        <div class="tile">
            <div class="tile is-parent">
                <figure class="image">
                    <img src={product.image} alt="">
                </figure>
            </div>
        </div>
    </div>
    <div class="tile is-vertical is-6">
        <div class="tile">
            <div class="tile is-parent">
                <div class="content">
                    <p class="title is-3">{product.description}</p>
                    <div class="is-flex-direction-column is-align-items-center content mt-2">
                        <p class="tag is-info is-large">Price: {product.price}</p>
                        <button class="button is-primary" type="submit">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
